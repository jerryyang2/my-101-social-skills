// Build-time parser only. npm ci --prefix localization
const acorn = require('acorn');
let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  const ast = acorn.parse(input, {ecmaVersion: 'latest', sourceType: 'script', allowReturnOutsideFunction: true});
  const nodes = [];
  function visit(node, parent) {
    if (!node || typeof node !== 'object') return;
    if (node.type === 'Literal' && typeof node.value === 'string') {
      const propertyKey = parent?.type === 'Property' && parent.key === node && !parent.computed;
      // Character display-name maps have matching keys and values; storage IDs stay unchanged.
      const characterKey = propertyKey && ['宇', '畯', '和', '嘉'].includes(node.value);
      const stableField = parent?.type === 'Property' && parent.value === node &&
        ['id', 'code', 'date', 'type', 'classKey', 'cardKey'].includes(parent.key.name || parent.key.value);
      if ((!propertyKey || characterKey) && !stableField) nodes.push({kind: 'string', start: node.start, end: node.end, value: node.value});
    } else if (node.type === 'TemplateLiteral') {
      nodes.push({kind: 'template', start: node.start, end: node.end,
        quasis: node.quasis.map(q => q.value.cooked ?? q.value.raw),
        expressions: node.expressions.map(e => [e.start, e.end])});
    }
    for (const [key, value] of Object.entries(node)) {
      if (['start', 'end', 'loc', 'range'].includes(key)) continue;
      if (Array.isArray(value)) value.forEach(child => visit(child, node));
      else if (value && typeof value === 'object') visit(value, node);
    }
  }
  visit(ast, null);
  process.stdout.write(JSON.stringify(nodes));
});
