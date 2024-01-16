const dtf =
  new Intl.DateTimeFormat("es", {
    year: "numeric",
    month: "short",
    day: "numeric",
    // dateStyle: "full",
    // timeStyle: "short",
    timeZone: "America/Argentina/Buenos_Aires",

  });

export const getFormattedDate = (date: Date): string => (date ? dtf.format(date) : "");

export const trim = (str = "", ch?: string) => {
  let start = 0,
    end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

export const slugify = (str: string) => {
  // Replace non-letter or digits by -
  str = str.replace(/[^\w\s-]/g, "");
  // Remove all spaces
  str = str.replace(/\s/g, "-");
  // Replace all non-word characters except - with nothing
  str = str.replace(/[^\w-]/g, "");

  return str.toLowerCase();
}