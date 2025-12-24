export const normalizeTrailingSlash = (
  subject: string,
  wantSlash = true
): string => {
  if (subject.endsWith("/")) {
    const replacement = wantSlash ? "/" : "";
    return subject.replace(/\/+$/, replacement);
  } else if (wantSlash) {
    return `${subject}/`;
  }
  return subject;
};
export const normalizeLeadingSlash = (
  subject: string,
  wantSlash = true
): string => {
  if (subject.startsWith("/")) {
    const replacement = wantSlash ? "/" : "";
    return subject.replace(/^\/+/, replacement);
  } else if (wantSlash) {
    return `/${subject}`;
  }
  return subject;
};
