export const getArticles = () => {
  return fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=5f937c20b51949509c1771616818bd9a")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok ${response.status}`)
    } else {
      return response.json()
    }
  })
}