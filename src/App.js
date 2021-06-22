import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

/**
 * React.Component 가 갖고 있는 function
 * - Life Cycle function ( render() 전 호출 )
 *    -- Mounting : "태어나는 것"과 같아
 *          * constructor()
 *          * static getDerivedStateFromProps() -패스
 *          * render()
 *          * componentDidMount()
 *    -- Updating : 일반적인 업데이트를 의미
 *           * static getDerivedStateFromProps()
 *           * shouldComponentUpdate() -패스 ( 업데이트 할지 말지 결정하는 아이 )
 *           * render()
 *           * getSnapshotBeforeUpdate() -패스 ( 노마드 인생에 사용한 적 없다 함 ㅋ )
 *           * componentDidUpdate()
 *    -- UnMounting : component가 죽는걸 의미 ( 페이지가 바뀔때 )
 *            * componentWillUnmount()
 * - render()
*/
class App extends React.Component{
  constructor(){
    super();
    console.log("Hello");
  }

  // state 을 사용 하려면 React.Component 안에서 사용해야 함
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async() => {
    return await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
  }

  componentDidMount(){
    this.getMovies().then((json) => {
      const { data: { data: { movies } }} = json; // ES6
      this.setState((current) => ({
        isLoading: false,
        movies,
      }));
    });
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  
  render(){
    const { isLoading, movies } = this.state; // ES6
    return (
      <section className="container">
        {
          isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map(movie =>
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              )}
            </div>
          )
        }
      </section>
    )
  }
}

export default App;
