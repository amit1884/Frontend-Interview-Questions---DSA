function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) continue; 

    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

const nestedObj = {
  user: {
    name: "John",
    address: {
      city: "New York",
      zip: 12345
    }
  },
  active: true,
  roles: ["admin", "editor"]
};

const flatObj = flattenObject(nestedObj);

console.log(flatObj);