export const isTarget = (dom, e) => (!dom.is(e.target) && dom.has(e.target).length === 0)