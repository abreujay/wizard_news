import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const newsApiKey = process.env.NEWSAPIKEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`;
interface NewsItem {
  title: string;
  description: string;
  url: string;
}
export async function searchNews() {
    console.log('Procurando Notícias...');
    try {
      const response = await axios.get(url);
      const data: any[] = response.data.articles;
      const news: NewsItem[] = data.map(article => ({
        title: article.title,
        description: article.description,
        url: article.url
      }));
      return news;
    } catch (error) {
      console.error('Erro ao Buscar Notícias:', error);
      return [];
    }
  }
  
