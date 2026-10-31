(() => {
  'use strict';

  const clamp = (value, minimum, maximum) => Math.max(minimum, Math.min(maximum, value));
  function overviewDistance(aspect = 1) {
    return clamp(33 / Math.sin(Math.atan(Math.tan(Math.PI / 8) * Math.min(1, Math.max(0.35, aspect)))), 84, 220);
  }
  function preset(mode, following, aspect) {
    const pitch = mode === 'top' ? Math.PI / 2 - 0.025 : mode === 'eye' ? 0.08 : 0.85;
    return { pitch, yaw: 0.4, distance: mode === 'eye' ? 17 : following ? 38 : overviewDistance(aspect), height: mode === 'eye' ? 3.4 : 1.8 };
  }
  function panTarget(three, camera, origin, start, end) {
    const normal = Math.abs(camera.getWorldDirection(new three.Vector3()).y) < 0.15
      ? camera.getWorldDirection(new three.Vector3()) : new three.Vector3(0, 1, 0);
    const plane = new three.Plane().setFromNormalAndCoplanarPoint(normal, origin);
    const ray = new three.Raycaster();
    const initial = new three.Vector3();
    const current = new three.Vector3();
    ray.setFromCamera(start, camera);
    if (!ray.ray.intersectPlane(plane, initial)) return origin.clone();
    ray.setFromCamera(end, camera);
    if (!ray.ray.intersectPlane(plane, current)) return origin.clone();
    const result = origin.clone().add(initial.sub(current));
    result.x = clamp(result.x, -45, 45);
    result.z = clamp(result.z, -45, 45);
    result.y = clamp(result.y, 1.8, 10);
    return result;
  }
  function gestures(handlers) {
    const pointers = new Map();
    let start = null;
    let dragged = false;
    let multiTouch = false;
    let pinchSpan = 0;
    const span = () => {
      const points = [...pointers.values()];
      return points.length > 1 ? Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y) : 0;
    };
    return {
      down(event) {
        if (event.button !== 0) return false;
        pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
        if (pointers.size > 1) {
          multiTouch = true;
          dragged = true;
          pinchSpan = span();
        } else {
          start = { x: event.clientX, y: event.clientY, context: handlers.start() };
          dragged = false;
          multiTouch = false;
        }
        return true;
      },
      move(event) {
        if (!pointers.has(event.pointerId)) return;
        pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
        if (multiTouch) {
          const nextSpan = span();
          if (pinchSpan > 0 && nextSpan > 0) handlers.zoom(pinchSpan / nextSpan);
          pinchSpan = nextSpan;
        } else if (start) {
          const delta = { x: event.clientX - start.x, y: event.clientY - start.y };
          if (Math.hypot(delta.x, delta.y) > 7) dragged = true;
          if (dragged) handlers.drag(start, delta, event);
        }
      },
      up(event, cancelled = false) {
        const clicked = pointers.has(event.pointerId) && !cancelled && !multiTouch && !dragged;
        pointers.delete(event.pointerId);
        if (!pointers.size) { start = null; pinchSpan = 0; }
        else pinchSpan = span();
        return clicked;
      },
      clear() { pointers.clear(); start = null; pinchSpan = 0; multiTouch = false; dragged = false; }
    };
  }
  window.SocialIslandExplorer = { overviewDistance, preset, panTarget, gestures, zoom: (distance, factor) => clamp(distance * factor, 10, 220) };
})();
