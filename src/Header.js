import React, { useState } from 'react';

function Header() {
  const [liTabIndex, setLiTabIndex] = useState(-1);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setLiTabIndex(0);
  };

  const handleMouseLeave = () => {
    setLiTabIndex(-1);
    setIsHovered(false);
  };

  const ulClass = isHovered ? 'sc-fgfRvd kHBzmg' : 'sc-fgfRvd jwdAZt';
  const liClass = isHovered ? 'sc-likbZx dcjqQs' : 'sc-likbZx gIjMpm';
  const divClass = isHovered ? 'sc-likbZx dcjqQs active' : 'sc-likbZx gIjMpm';  
  const pClass = isHovered ? 'body-copy margin--0 sc-eKZiaR text-color--secondary margin--left-4' : 'body-copy margin--0 sc-eKZiaR iesoaL text-color--secondary margin--left-4';
  const active = isHovered ? 'sc-ePZHVD kxEVVW active' : 'sc-ePZHVD kxEVVW';   
  const liactive = isHovered ? 'sc-likbZx dcjqQs dropdown-options active' : 'sc-likbZx gIjMpm dropdown-optionsfalse'; 

  return (
    <div>
      <header className="header">
        <nav className='sc-hGoxap JRtlS sc-kQsIoO iJigMv navigation navigation__navigation-bar'>
        <button aria-label="İçeriğe Atla" data-testid="" id="skipToContentButton" kind="secondary" class="sc-brqgnP iPFLWk button button--secondary sc-dCzMmV gLASoB" type="submit">İçeriğe Atla</button>
          <ul id="nav-list" aria-hidden="true" className="sc-eXNvrr hMqyAO">
              <div className="sc-jbKcbu gbHCZO" aria-label="logo" title="logo" role="img" id="logo" placeholder="logo" tabIndex="0">
                <div className="logo container--hw-full logo cursor--pointer" role="img"></div>
              </div>
              <span className="sc-gpHHfC iLqZlV" data-route="ANA SAYFA">
                <a href='asdasd' tabIndex="0" data-route="ANA SAYFA" aria-label="ANA SAYFA" data-testid="navigation-item-0-ANA SAYFA">
                  <span>
                  <svg
                    aria-hidden="true"
                    aria-label="home"
                    color="#f9f9f9"
                    role="img"
                    version="1.1"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    data-route="ANA SAYFA"
                    className="sc-bRBYWo bFBSwK"
                    style={{ width: '92px' }}
                  >
                    <title>Home Icon</title>
                    <path
                      d="M26.882 19.414v10.454h-5.974v-5.227h-5.974v5.227H8.961V19.414H5.227L17.921 6.72l12.694 12.694h-3.733z"
                      className="sc-Rmtcm cUjquv"
                    />
                  </svg>
                  </span>
                  <p className="page-nav page-nav--small text-color--primary margin--left-2 page-nav" style={{ padding: '2px 0px', whiteSpace: 'nowrap' }}>ANA SAYFA</p>
                </a>
              </span>

              <span className="sc-gpHHfC iLqZlV" data-route="ARAMA"><a href='sadsad' tabIndex="0" data-route="ARAMA" aria-label="ARAMA" data-testid="navigation-item-1-ARAMA"><span>
                <svg aria-hidden="true" aria-label="search" color="#f9f9f9" role="img" transform="" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-route="ARAMA" className="sc-bRBYWo bFBSwK">
                  <title></title>
                  <path d="M21.866 24.337c-3.933 2.762-9.398 2.386-12.914-1.13-3.936-3.936-3.936-10.318 0-14.255 3.937-3.936 10.32-3.936 14.256 0 3.327 3.327 3.842 8.402 1.545 12.27l4.56 4.558a2 2 0 0 1 0 2.829l-.174.173a2 2 0 0 1-2.828 0l-4.445-4.445zm-5.786-1.36a6.897 6.897 0 1 0 0-13.794 6.897 6.897 0 0 0 0 13.794z" className="sc-Rmtcm cUjquv">
                  </path>
                </svg>
                </span>
                <p className="page-nav page-nav--small text-color--primary margin--left-2 page-nav" style={{ padding: '2px 0px', whiteSpace: 'nowrap' }}>ARAMA</p></a>
              </span>

              <span class="sc-gpHHfC iLqZlV" data-route="İZLEME LİSTEM">
                <a href="asdasfd" tabIndex="0" data-route="İZLEME LİSTEM" aria-label="İZLEME LİSTEM" data-testid="navigation-item-2-İZLEME LİSTEM">
                  <span role="img" aria-hidden="true" class="icon icon--plus icon--size-12 margin--right-1" data-route="İZLEME LİSTEM" style={{top: "-2px", left: "2px"}}></span>
                  <p class="page-nav page-nav--small text-color--primary margin--left-2 page-nav" style={{padding: "2px 0px" , whiteSpace: "nowrap"}}>İZLEME LİSTEM</p>
              </a>
              </span>

              <span className="sc-gpHHfC iLqZlV hidden" data-route="ORIGINALS">
                <a href='sdsad' tabIndex="0" data-route="ORIGINALS" aria-label="ORIGINALS" data-testid="navigation-item-3-ORIGINALS">
                  <span>
                    <svg aria-hidden="true" aria-label="originals" color="#f9f9f9" role="img" transform="" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-route="ORIGINALS" className="sc-bRBYWo bFBSwK">
                      <title></title>
                      <path d="M17.625 26.028L10.44 30l1.373-8.412L6 15.631l8.033-1.228 3.592-7.653 3.592 7.653 8.033 1.228-5.813 5.957L24.81 30z" className="sc-Rmtcm cUjquv"></path>
                    </svg>
                  </span>
                  <p className="page-nav page-nav--small text-color--primary margin--left-2 page-nav" style={{padding: "2px 0px" , whiteSpace: "nowrap"}}>ORIGINALS</p>
                </a>
              </span>


              <span className="sc-gpHHfC iLqZlV hidden" data-route="FİLMLER">
                <a href="saasdd" tabIndex="0" data-route="FİLMLER" aria-label="FİLMLER" data-testid="navigation-item-4-FİLMLER">
                <span>
                  <svg aria-hidden="true" aria-label="movies" color="#f9f9f9" role="img" transform="" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-route="FİLMLER" className="sc-bRBYWo bFBSwK">
                    <title></title>
                    <path d="M24.71 20.07a2.97 2.97 0 1 0-4.2-4.2 2.97 2.97 0 0 0 4.2 4.2m-12.262 0a2.97 2.97 0 1 0-4.2-4.2 2.97 2.97 0 0 0 4.2 4.2m6.173-10.31a2.969 2.969 0 1 0-4.199 4.198 2.969 2.969 0 0 0 4.199-4.198m0 12.262a2.969 2.969 0 1 0-4.199 4.198 2.969 2.969 0 0 0 4.199-4.198m-1.544-4.629a.846.846 0 1 0-1.197 1.196.846.846 0 0 0 1.197-1.196m18.06-.644c-3.33 6.913-8.165 9.928-11.635 11.24-2.57.971-4.762 1.178-5.949 1.208-.348.032-.698.053-1.052.053C10.287 29.25 5.25 24.213 5.25 18S10.287 6.75 16.5 6.75c6.214 0 11.25 5.037 11.25 11.25a11.19 11.19 0 0 1-2.493 7.054c2.832-1.612 5.844-4.382 8.138-9.143a.968.968 0 0 1 1.742.838" class="sc-Rmtcm cUjquv"></path>
                  </svg>
                </span><p class="page-nav page-nav--small text-color--primary margin--left-2 page-nav" style={{padding: "2px 0px" , whiteSpace: "nowrap"}}>FİLMLER</p>
                </a>
              </span>

              <span className="sc-gpHHfC iLqZlV hidden" data-route="DİZİLER">
                <a href='sadsad' tabIndex="0" data-route="DİZİLER" aria-label="DİZİLER" data-testid="navigation-item-5-DİZİLER">
                  <span>
                    <svg aria-hidden="true" aria-label="series" color="#f9f9f9" role="img" transform="" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-route="DİZİLER" className="sc-bRBYWo bFBSwK">
                      <title></title>
                      <path d="M18.84 11.965h6.722a4 4 0 0 1 4 4V26a4 4 0 0 1-4 4H10.375a4 4 0 0 1-4-4V15.965a4 4 0 0 1 4-4h6.211l-3.981-3.981a1.162 1.162 0 1 1 1.643-1.644l3.465 3.465 3.464-3.465a1.162 1.162 0 0 1 1.644 1.644l-3.982 3.981zm6.428 7.73a1.718 1.718 0 1 0 0-3.436 1.718 1.718 0 0 0 0 3.436zm0 6.011a1.718 1.718 0 1 0 0-3.435 1.718 1.718 0 0 0 0 3.435z" class="sc-Rmtcm cUjquv"></path>
                    </svg>
                  </span>
                  <p className="page-nav page-nav--small text-color--primary margin--left-2 page-nav" style={{padding: "2px 0px" , whiteSpace: "nowrap"}}>DİZİLER</p>
                </a>
              </span>
          </ul>

          <div id="account-dropdown" data-testid="account-dropdown" aria-haspopup="true" aria-expanded="false" aria-label="DEMİREL adlı kullanıcının profili. Profilleri ve erişim ayarlarını değiştirebileceğiniz açılır menüyü genişletmek için bunu seçin." role="button" class="sc-hIVACf cXrgwk dropdown">
          
          <ul tabIndex="0"
            data-testid="account-dropdown-list"
            role="menu"
            className={ulClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <li className={liClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}> 
              <a href='sadasd' id="active-profile" data-testid="dropdown-active-profile" tabIndex="-1" class="sc-bEjcJn kYCEzQ">
                <p className={pClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>DEMİREL</p>
                  <div aria-label="" data-testid="" role="button" tabIndex="-1" class="sc-jtggT sc-bGbJRg gHzMKE">
                    <div class="sc-dEoRIm sc-jtRlXQ kOICNQ profile-avatar" data-testid="selected-avatar-image"></div>
                  </div>
              </a>
            </li>
            <div className={active}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} role="presentation"></div>
            <div class="sc-drMfKT hbptig">
              
            <li className={divClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                <a href='sadasd' aria-label="Profilim adlı kullanıcının profiline geçmek için bunu seçin." data-testid="dropdown-profile-0" role="menuitem" tabindex="-1" aria-hidden="true">
                <div aria-label="" data-testid="" role="button" tabIndex="-1" class="sc-jtggT sc-bGbJRg gHzMKE">
                  <div class="sc-dEoRIm sc-jtRlXQ jpVPud profile-avatar" data-testid="selected-avatar-image"></div>
                </div>
                <p class="body-copy margin--0 sc-eKZiaR eeBCak text-color--secondary margin--left-4">Profilim</p>
                </a>
            </li>

            <li aria-hidden="true" aria-label="Profil Ekleyin" className={liactive} id="dropdown-option_add-profile" data-testid="dropdown-option-0-add-profile" role="menuitem" tabIndex={liTabIndex}>
                <a href='sadasd' aria-hidden="true" class="text-button text-color--secondary" data-route="Profile" tabindex="-1">
                  <span style={{alignItems: "center", color: "rgb(202, 202, 202)", display: "flex"}}>
                    <div aria-label="Add Profile" class="sc-fyjhYU AEjQN add-profile" role="button" style={{marginRight: "16px"}}>
                      <svg aria-hidden="true" aria-label="plus" color="white" role="img" transform="" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" class="sc-bRBYWo bFBSwK">
                      <title></title>
                      <path d="M16.469 17.219V5.5a1 1 0 0 1 1-1h.312a1 1 0 0 1 1 1v11.719H30.5a1 1 0 0 1 1 1v.312a1 1 0 0 1-1 1H18.781V31.25a1 1 0 0 1-1 1h-.312a1 1 0 0 1-1-1V19.531H4.75a1 1 0 0 1-1-1v-.312a1 1 0 0 1 1-1h11.719z" class="sc-Rmtcm cUjquv"></path>
                      </svg>
                    </div>
                    <span style={{maxWidth: "134px"}}>Profil Ekleyin</span>
                  </span>
                </a>
            </li>

                <li aria-hidden="true" aria-label="Profilleri Düzenleyin" className={liactive} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id="dropdown-option_edit-profiles" data-testid="dropdown-option-1-edit-profiles" role="menuitem" tabIndex={liTabIndex}>
                <a href='sadasd' aria-hidden="true" class="text-button text-color--secondary" data-route="Profile" tabIndex="-1">Profilleri Düzenleyin</a>
                </li>
                <li aria-hidden="true" aria-label="Uygulama Ayarları" className={liactive} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id="dropdown-option_app-settings" data-testid="dropdown-option-2-app-settings" role="menuitem" tabIndex={liTabIndex}>
                  <a href='sadasd' aria-hidden="true" class="text-button text-color--secondary" data-route="Profile" tabIndex="-1">Uygulama Ayarları</a>
                </li>
                <li aria-hidden="true" aria-label="Hesap"className={liactive} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id="dropdown-option_account" data-testid="dropdown-option-3-account" role="menuitem" tabIndex={liTabIndex}>
                  <a href='sadasd' aria-hidden="true" class="text-button text-color--secondary" data-route="Profile" tabIndex="-1">Hesap</a>
                </li>
                <li aria-hidden="true" aria-label="Yardım" className={liactive} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id="dropdown-option_help" data-testid="dropdown-option-4-help" role="menuitem" tabIndex={liTabIndex}>
                  <a aria-hidden="true" class="text-button text-color--secondary" data-route="Profile" href="https://help.disneyplus.com" tabIndex="-1" target="external">Yardım</a>
                </li>
                <li aria-hidden="true" aria-label="Oturumu Kapat" className={liactive} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id="dropdown-option_logout" data-testid="dropdown-option-5-logout" role="menuitem" tabIndex={liTabIndex}>
                  <a href='sadasd' aria-hidden="true" class="text-button text-color--secondary" data-route="Profile" tabIndex="-1">Oturumu Kapat</a>
                </li>
            </div>
          </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
