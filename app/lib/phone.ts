export const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");

  if (digits.length <= 11) {
    return digits
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  }

  return digits;
};