const API = "https://api.themoviedb.org/3";

export function getApi(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjRhNjc5Y2MzNzdkYjExOTVmNTU2ZTE5NjRjMjJjZiIsInN1YiI6IjYyMTY3NTM2MWEzMjQ4MDA2YWMxM2IxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gt-7OeSHCzMrZKgM8eP_Fvlv0PaByuDP9RPXnxPH1DI",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
