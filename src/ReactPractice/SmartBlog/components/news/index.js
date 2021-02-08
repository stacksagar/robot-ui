import axios from "../axios";
export const newsCategory = {
  technology: "technology",
  science: "science",
  business: "business",
  entertainment: "entertainment",
  general: "general",
  health: "health",
  sports: "sports",
};

const MAX_ITEM_PER_PAGE = 10;

export default class News {
  constructor(category) {
    this._category = category;
    this._currentPage = 1;
    this._totalPage = 1
    this._pageSize = MAX_ITEM_PER_PAGE;
    this._SearchTerm = "";
  }

  async getNews() {
    try {
      const { data } = await axios.get(this._getURL());
      this._totalPage = Math.ceil(data.totalResults / this._pageSize);
      return {
        articles: data.articles,
        category: this._category,
        currentPage: this._currentPage,
        totalPage: this._totalPage,
        totalResults: data.totalResults,
        isNext: this.isNext(),
        isPrevious: this.isPrevious(),
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  next() {
    if (this.isNext()) {
      this._currentPage++;
      return this.getNews();
    }
  }
  prev() {
    if (this.isPrevious()) {
      this._currentPage--;
      return this.getNews();
    }
  }
  setCurrentPage(pageNumber) {
    if (pageNumber < 1 && pageNumber > this._totalPage) {
      throw new Error("Invalid Page Number");
    }
    this._currentPage = pageNumber;
    return this.getNews();
  }

  changeCategory(category) {
    this._category = category;
    this._currentPage = 1;
    return this.getNews();
  }
  search(term) {
    this._SearchTerm = term;
    return this.getNews();
  }

  _getURL() {
    let url = "/?";
    if (this._category) url += `category=${this._category}`;
    if (this._SearchTerm) url += `&q=${this._SearchTerm}`;
    if (this._pageSize) url += `&pageSize=${this._pageSize}`;
    if (this._currentPage) url += `&page=${this._currentPage}`;
    return url;
  }

  isNext() {
    return this._currentPage < this._totalPage;
  }
  isPrevious() {
    return this._currentPage > 1;
  }
}
