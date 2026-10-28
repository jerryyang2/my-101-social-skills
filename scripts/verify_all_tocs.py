#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import pypdf, re, os

web_dir = '備課平台'

pdfs = [
    ('教師手冊.pdf', 106, [1, 2, 3, 4], 4, 101),
    ('101堂特教學習單_注音版_B4.pdf', 106, [1, 2, 3, 4], 4, 101),
    ('101堂特教社交技巧彩色學習單全集.pdf', 106, [1, 2, 3, 4], 4, 101),
    ('101堂特教社交技巧故事島與超能力招式全集.pdf', 104, [1, 2], 2, 101),
    ('101堂特教社交技巧角色劇場與遊樂場實戰全集.pdf', 104, [1, 2], 2, 101),
]

print('=== 1. PDF LINK ANNOTATIONS VERIFICATION ===')
all_pdf_ok = True
for name, total_p, toc_pages, offset, exp_links in pdfs:
    p_path = os.path.join(web_dir, name)
    reader = pypdf.PdfReader(p_path)
    p_count = len(reader.pages)
    link_count = 0
    target_pages = set()
    for toc_idx in toc_pages:
        page = reader.pages[toc_idx]
        annots = page.get('/Annots')
        if annots:
            for a_ref in annots:
                a = a_ref.get_object()
                if a.get('/Subtype') == '/Link':
                    link_count += 1
                    dest = a.get('/Dest') or (a.get('/A') and a.get('/A').get('/D'))
                    if dest:
                        target_obj = dest[0]
                        # find target page index
                        for idx, p in enumerate(reader.pages):
                            if p.indirect_reference == target_obj:
                                target_pages.add(idx)
                                break
    status = '✅ PASS' if (p_count == total_p and link_count == exp_links and len(target_pages) == exp_links) else '❌ FAIL'
    if status != '✅ PASS': all_pdf_ok = False
    print(f'{status} {name}: {p_count}/{total_p} 頁, {link_count}/{exp_links} 目錄連結, 跳轉目標涵蓋 {len(target_pages)} 個課堂頁面')

htmls = [
    'all_teacher_manual_book.html',
    'all_worksheets_zhuyin_b4.html',
    'all_worksheets_book.html',
    'all_stories_and_skills_book.html',
    'all_roleplay_and_games_book.html',
]

print('\n=== 2. HTML ANCHOR JUMPS & FAVICON VERIFICATION ===')
all_html_ok = True
for h_name in htmls:
    h_path = os.path.join(web_dir, h_name)
    with open(h_path, 'r', encoding='utf-8') as f:
        content = f.read()
    hrefs = re.findall(r'href=[\"\\\']#lesson-(\d+)[\"\\\']', content)
    ids = re.findall(r'id=[\"\\\']lesson-(\d+)[\"\\\']', content)
    has_favicon = 'favicon' in content
    
    unique_hrefs = set(map(int, hrefs))
    unique_ids = set(map(int, ids))
    
    status = '✅ PASS' if (len(unique_hrefs) == 101 and len(unique_ids) == 101 and has_favicon) else '❌ FAIL'
    if status != '✅ PASS': all_html_ok = False
    print(f'{status} {h_name}: {len(unique_hrefs)}/101 目錄跳轉錨點, {len(unique_ids)}/101 課堂目標ID, Favicon關聯: {has_favicon}')

print('\n=== FINAL VERIFICATION RESULT ===')
if all_pdf_ok and all_html_ok:
    print('🎉 ALL 5 DELIVERABLES 100% PERFECTLY VERIFIED!')
else:
    print('⚠️ SOME VERIFICATIONS FAILED!')
