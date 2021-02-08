import React, { Component } from "react";
import Header from "./components/Header";
import News, { newsCategory } from "./components/news";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";
import { Loading } from "./components/Loading";

const news = new News(newsCategory.technology);

export default class SmartBlog extends Component {
  state = {
    data: {},
    isLoading: true,
  };

  next = () => {
    if (this.state.data.isNext) {
      this.setState({ isLoading: true });
    }
    news
      .next()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isLoading: false });
      });
  };

  previous = () => {
    if (this.state.data.isPrevious) {
      this.setState({ isLoading: true });
    }
    news
      .prev()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isLoading: false });
      });
  };

  pageChangeHandler = (value) => {
    this.setState({
      data: { ...this.state.data, currentPage: Number.parseInt(value) },
    });
  };

  jumpPage = () => {
    this.setState({ isLoading: true });
    news
      .setCurrentPage(this.state.data.currentPage)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isLoading: false });
      });
  };

  changeCategory = (category) => {
    this.setState({ isLoading: true });
    news
      .changeCategory(category)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isLoading: false });
      });
  };
  search = (term) => {
    this.setState({ isLoading: true });
    news
      .search(term)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isLoading: false });
      });
  };

  scrollToTop = () => {
    window.scroll(0, 0);
  };

  searchRef = React.createRef();
  newsItemRefs = [];

  componentDidMount() {
    this.searchRef.current.focus();

    news
      .getNews()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isLoading: false });
      });

    setTimeout(() => {
      this.newsItemRefs.forEach((item) => {
        item.style.background = "black";
      });
    }, 5000);
  }

  render() {
    const {
      articles,
      category,
      currentPage,
      totalPage,
      totalResults,
      isNext,
      isPrevious,
    } = this.state.data;
    return (
      <div className="bg-dark" style={{ minHeight: "100vh" }}>
        <div id="get" className="col-10 mx-auto pb-5">
          <Header
            ref={this.searchRef}
            search={this.search}
            currentPage={currentPage}
            totalPage={totalPage}
            totalResults={totalResults}
            changeCategory={this.changeCategory}
            category={category}
          />
          {this.state.isLoading ? (
            <Loading />
          ) : (
            <>
              <NewsList ref={this.newsItemRefs} allNews={articles} />
              <Pagination
                next={this.next}
                previous={this.previous}
                articles={articles}
                category={category}
                currentPage={currentPage}
                totalPage={totalPage}
                totalResults={totalResults}
                isNext={isNext}
                isPrevious={isPrevious}
                jumpPage={this.jumpPage}
                pageChangeHandler={this.pageChangeHandler}
              />
            </>
          )}
          <button
            style={{
              position: "fixed",
              bottom: "10px",
              right: "10px",
              boxShadow: "0px 0px 20px 0px #111",
            }}
            onClick={this.scrollToTop}
            className="btn btn-secondary btn-sm"
          >
            {" "}
            Go To 🔝{" "}
          </button>
        </div>
      </div>
    );
  }
}
