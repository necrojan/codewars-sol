function solution(str, ending) {
  const pos = str.lastIndexOf(ending);
  return str.substr(pos) === ending;
}
