const locks=new Set;export function lockBodyScrolling(o){locks.add(o),document.body.classList.add("sc-scroll-lock")}export function unlockBodyScrolling(o){locks.delete(o),0===locks.size&&document.body.classList.remove("sc-scroll-lock")}