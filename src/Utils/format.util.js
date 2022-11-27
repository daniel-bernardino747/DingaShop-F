export default function formatInReal(num) {
  return num.toLocaleString(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
    },
  );
}

export function handleKeyUp(e) {
  e.target.maxLength = 14;
  let value = e.target.value;
  value = value.replace(/\D/g, '');
  value = (value.length < 4)
    ? value.replace(/^(\d{3})/g, '$1.')
    : value;
  value = (value.length > 3 && value.length < 7)
    ? value.replace(/^(\d{3})(\d{3})/g, '$1.$2.')
    : value;
  value = value.replace(/^(\d{3})(\d{3})(\d{3})/g, '$1.$2.$3-');
  e.target.value = value;
}
