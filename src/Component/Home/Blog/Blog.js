import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../../../images/blog1.png'
import blog2 from '../../../images/blog2.jpg'
import react1 from '../../../images/react1.jpg'

import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
const Blog = () => {
  return (
    <div>
      <HeaderNavbar></HeaderNavbar><br />
      <h2 style={{ marginTop: '50px' }} className='text-success pb-3'>All <span className='text-white pl-2'>Blog</span><span className='text-white'> ------------------|| <Link to='/all-blog'> <button class="btn btn-outline-success my-2 my-sm-0" type="submit">See More Blog</button>  </Link>  </span></h2>
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src={blog1} alt="Card image cap" />
          <div class="card-body" style={{ background: ' rgb(27, 61, 93)' }}>
            <h5 style={{ color: "rgb(81, 233, 157)" }}>Javascript blog</h5>
            <p class="text-white">Some Basic tricks to solve problem-solving in JavaScript.</p>
            <a href="https://ashik1012.medium.com/some-basic-tricks-to-solve-problem-solving-in-javascript-b0c3aabdd1f1"> <button className='btn btn-danger' style={{ width: '100%', border: 'none', borderRadius: '5px', padding: '5px', color: 'white' }}>Read</button></a>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={blog2} alt="Card image cap" />
          <div class="card-body" style={{ background: ' rgb(27, 61, 93)' }}>
            <h5 style={{ color: "rgb(81, 233, 157)" }}>Javascript blog</h5>
            <p class="text-white">The most important things in JavaScript you should use.</p>
            <a href="https://ashik1012.medium.com/the-most-important-things-in-javascript-you-should-use-e1913c848293"> <button className='btn btn-danger' style={{ width: '100%', border: 'none', borderRadius: '5px', padding: '5px', color: 'white' }}>Read</button></a>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={react1} alt="Card image cap" />
          <div class="card-body" style={{ background: ' rgb(27, 61, 93)' }}>
            <h5 style={{ color: "rgb(81, 233, 157)" }}>Blog of Javascript</h5>
            <p class="text-white">Error handling in JavaScript using try catch method.</p>
            <a href="https://ashik1012.medium.com/error-handling-in-javascript-using-try-catch-method-bd1cabc28fdf"> <button className='btn btn-danger' style={{ width: '100%', border: 'none', borderRadius: '5px', padding: '5px', color: 'white' }}>Read</button></a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Blog;