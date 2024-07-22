import React from 'react';
import '../../Css/common.css';
import '../../Css/header.css';

function Header() {

  const headerStyle = {
    height: '60px'
  }
  return (
    <header style={headerStyle}>
      <div className='header-div'>
        <div className='wrap'>
          <div className='logo-wrap'>
            <h1>아린 다이어트</h1>
          </div>
          <div className='menu-wrap'>
            <a className='bold'>아린한의원 소개</a>
            <a className='bold'>아린다이어트</a>
            <a className='bold'>아린바디라인</a>
            <a className='bold'>아린식품</a>
            <a className='bold'>이벤트</a>
            <a className='bold'>커뮤니티</a>
          </div>
          <div class="right-wrap">
            
          </div>
        </div>
        <div class="drop-menu-wrap">
          <div class="left-wrap"></div>
          <div class="center-wrap">
            <div class="sub-menu-wrap">
              <a class="bold"><span class="text">한의원 소개</span></a>
              <a class="bold"><span class="text">의료진 소개</span></a>
              <a class="bold"><span class="text">진료실 미리보기</span></a>
              <a class="bold"><span class="text">오시는 길</span></a>
            </div>
            <div class="sub-menu-wrap">
              <a class="bold"><span class="text">아린스틱</span></a>
              <a class="bold"><span class="text">클렌즈팩</span></a>
              <a class="bold"><span class="text">나이트스틱</span></a>
              <a class="bold"><span class="text">킵스틱</span></a>
              <a class="bold"><span class="text">다이어트 프로그램</span></a>
            </div>
            <div class="sub-menu-wrap">
              <a class="bold"><span class="text">A-fit 불부항 • 지방분해침</span></a>
              <a class="bold"><span class="text">A-fit 산삼약침</span></a>
              <a class="bold"><span class="text">A-fit 매선</span></a>
              <a class="bold"><span class="text">A-fit 고주파</span></a>
            </div>
            <div class="sub-menu-wrap">
              <a class="bold"><span class="text">이벤트</span></a>
            </div>
            <div class="sub-menu-wrap">
              <a class="bold"><span class="text">감량사례</span></a>
              <a class="bold"><span class="text">온라인 상담</span></a>
              <a class="bold"><span class="text">자주 묻는 질문</span></a>
              <a target="_blank" href="https://blog.naver.com/arine_diet" class="bold"><span class="text">아린스토리</span></a>
            </div>
          </div>
          <div class="right-wrap">
            <a>
              <div class="img-wrap">
                <div class="img ko"></div>
              </div>
              <span class="text">한국어</span>
            </a>
            <a><span class="text">로그인</span></a>  
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;