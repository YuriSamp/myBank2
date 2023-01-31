export const testaData = (data: string): string => {
  const pattern = new RegExp(
    /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/
  );
  const pattern2 = new RegExp(
    /^(0?[1-9]|[12][0-9]|3[01])(0?[1-9]|1[012])\d{4}$/
  );
  if (pattern.test(data) == true) {
    return data;
  }
  if (pattern2.test(data) == true) {
    const string = '';
    const dia = data.slice(0, 2);
    const mes = data.slice(2, 4);
    const ano = data.slice(4);
    return string.concat(dia, '/', mes, '/', ano);
  } else {
    return 'Data invalida';
  }
};
