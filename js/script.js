// SIDEBAR

const menuItem = document.querySelectorAll('.menu-item');

// remove active class
const changeActiveItem = () => {
  menuItem.forEach(item => {
    item.classList.remove('active');
  });
};

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');

    if (item.id != "notifications") {
      document.querySelector('.noti-popup').style.display = 'none';
    }
    else {
      document.querySelector('.noti-popup').style.display = 'block';
      document.querySelector('.noti-count').style.display = 'none';
    }

    if (item.id != "msg-notifications") {
      document.querySelector('.msg-popup').style.display = 'none';
    }
    else {
      document.querySelector('.msg-popup').style.display = 'block';
      document.querySelector('.msg-count').style.display = 'none';
    }
  });
});

// MESSAGES

const msgNoti = document.querySelector('#msg-notifications');
const messages = document.querySelector('.messages');
const msgPopup = document.querySelector('.left .msg-popup')

msgNoti.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  msgNoti.querySelector('.noti-count').style.display = 'none';

  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 2000);
});

// MSG SEARCH

const msg = messages.querySelectorAll('.message');
const msgSearch = document.querySelector('#message-search');

const searchMsg = () => {
  const val = msgSearch.value.toLowerCase();
  // console.log(val);
  msg.forEach(user => {
    let name = user.querySelectorAll('h5').textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = 'flex';
    }
    else {
      user.style.display = 'none';
    }
  });
};

msgSearch.addEventListener('keyup', searchMsg);

// THEME

const theme = document.querySelector('#themeBtn');
const themeModal = document.querySelector('.customize-theme');

const openThemeModal = () => {
  themeModal.style.display = 'grid';
};

theme.addEventListener('click', openThemeModal);

window.addEventListener('scroll', () => {
  themeModal.style.display = 'none';
  document.querySelector('.noti-popup').style.display = 'none';
  document.querySelector('.msg-popup').style.display = 'none';
});

// FONT CHANGE

const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

fontSizes.forEach(size => {

  size.addEventListener('click', () => {
    let fontSize;

    if (size.classList.contains('font-size-1')) {
      fontSize = '10px';
    }
    else if (size.classList.contains('font-size-2')) {
      fontSize = '13px';
    }
    else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
    }
    else if (size.classList.contains('font-size-4')) {
      fontSize = '19px';
    }
    else if (size.classList.contains('font-size-5')) {
      fontSize = '22px';
    }

    document.querySelector('html').style.fontSize = fontSize;
  });

});

const sizeBtn = document.querySelectorAll('.sizeBtn');

// remove active class

const changeActiveFont = () => {
  sizeBtn.forEach(item => {
    item.classList.remove('active');
  });
};

sizeBtn.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveFont();
    item.classList.add('active');
  });
});

// COLOR CHANGE

const colorPallete = document.querySelectorAll('.choose-color span');

// remove active
const removeActiveHue = () => {
  colorPallete.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  });
};

colorPallete.forEach(color => {
  color.addEventListener('click', () => {

    removeActiveHue();
    color.classList.add('active');

    let primary;

    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    }
    else if (color.classList.contains('color-2')) {
      primaryHue = 36;
    }
    else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    }
    else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    }
    else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }

    root.style.setProperty('--primary-hue', primaryHue);
  });
});

// // LIGHT THEME

// const bg1 = document.querySelector('.bg-1');
// const bg2 = document.querySelector('.bg-2');
// const bg3 = document.querySelector('.bg-3');

// let lightColorLightness;
// let whiteColorLightness;
// let darkColorLightness;

// const changeBG = () => {
//   root.style.setProperty('--light-color-lightness', lightColorLightness);
//   root.style.setProperty('--white-color-lightness', lightColorLightness);
//   root.style.setProperty('--dark-color-lightness', lightColorLightness);
// };

// bg1.addEventListener('click', () => {

//   darkColorLightness = '95%';
//   whiteColorLightness = '10%';
//   lightColorLightness = '0%';

//   bg1.classList.add('active');
//   bg2.classList.remove('active');
//   bg3.classList.remove('active');

//   changeBG()
// });

// bg2.addEventListener('click', () => {
//   darkColorLightness = '95%';
//   whiteColorLightness = '20%';
//   lightColorLightness = '15%';

//   bg2.classList.add('active');
//   bg1.classList.remove('active');
//   bg3.classList.remove('active');

//   changeBG();
// });

// bg3.addEventListener('click', () => {
//   darkColorLightness = '95%';
//   whiteColorLightness = '10%';
//   lightColorLightness = '0%';

//   bg3.classList.add('active');
//   bg1.classList.remove('active');
//   bg2.classList.remove('active');

//   changeBG();
// });