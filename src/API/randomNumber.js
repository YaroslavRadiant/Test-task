export function getUsersData() {
  return fetch(
    "https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new"
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
}
