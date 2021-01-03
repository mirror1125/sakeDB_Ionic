import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

const setObject = async (key: string, jsonObj: object) => {
  await Storage.set({
    key: key,
    value: JSON.stringify(jsonObj),
  });
};

const getObject = async (key: string) => {
  const ret = await Storage.get({ key: key });

  if (typeof ret.value === "string") {
    return JSON.parse(ret.value);
  } else {
    return null;
  }
};

const setItem = async (key: string, value: string) => {
  await Storage.set({
    key: key,
    value: value,
  });
};

const getItem = async (key: string) => {
  const value = await Storage.get({ key: key });
  return value;
};

const removeItem = async (key: string) => {
  await Storage.remove({ key: key });
};

const keys = async () => {
  const keys = await Storage.keys();
  return keys;
};

const clear = async () => {
  await Storage.clear();
};

export { setObject, getObject, setItem, getItem, removeItem, keys, clear };
