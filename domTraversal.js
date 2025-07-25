const domTree = {
  id: "root",
  children: [
    {
      id: "header",
      children: [
        { id: "logo", children: [] },
        { id: "nav", children: [] }
      ]
    },
    {
      id: "main",
      children: [
        { id: "content", children: [] },
        { id: "sidebar", children: [] }
      ]
    }
  ]
};


function getElementById(id, domTree) {
  if (!domTree) return null;

 if (domTree?.id === id) {
  return domTree?.children && domTree?.children?.length > 0
    ? domTree
    : null;
}

  if (domTree?.children && Array.isArray(domTree?.children)) {
    for (let child of domTree?.children) {
      const found = getElementById(id, child);
      if (found) return found;
    }
  }

  return null;
}


console.log(getElementById("logo", domTree));

console.log(getElementById("sidebar", domTree));

console.log(getElementById("footer", domTree));