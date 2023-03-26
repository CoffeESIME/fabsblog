export const addClassName = (currClass: string, c: string | undefined) => {
    return `${currClass}${(c && c.length > 0) ? ` ${c}` : ''}`;
};