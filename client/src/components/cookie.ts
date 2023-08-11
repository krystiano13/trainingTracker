export const setCookie = (key: string, value: any, expiration: number) => {
  const date = new Date();
  const cookieName = `${key}=${value};`;
  const expires = `expires=${date.setDate(date.getTime() + expiration)}`;
  document.cookie = `${cookieName} ${expires} path=/`;
};

export const deleteCookie = (key: string) => {
  setCookie(key, null, 0);
};

export const getCookie = (key: string):string|false => {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result: string | false = false;

    cArray.forEach(item => {
        if (item.indexOf(key)) {
            result =  item.substring(item.length + 1);
        }
    });

    return result;
}