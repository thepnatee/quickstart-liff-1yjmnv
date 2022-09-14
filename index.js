// Import stylesheets
import './style.css';

// Body element
const body = document.getElementById('body');

// Button elements
const btnSend = document.getElementById('btnSend');
const btnClose = document.getElementById('btnClose');
const btnShare = document.getElementById('btnShare');
const btnLogIn = document.getElementById('btnLogIn');
const btnLogOut = document.getElementById('btnLogOut');
const btnScanCode = document.getElementById('btnScanCode');
const btnOpenWindow = document.getElementById('btnOpenWindow');

// Profile elements
const email = document.getElementById('email');
const userId = document.getElementById('userId');
const pictureUrl = document.getElementById('pictureUrl');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');

// QR element
const code = document.getElementById('code');
const friendShip = document.getElementById('friendShip');

async function main() {
  // Initialize LIFF app)
  await liff.init({ liffId: '1656014303-pLEPbw2L' });
  liff.ready.then(() => {
    switch (liff.getOS()) {
      case 'android':
        body.style.backgroundColor = '#d1f5d3';
        break;
      case 'ios':
        body.style.backgroundColor = '#eeeeee';
        break;
    }
    // do something you want when liff.init finishes
  });

  // await liff
  //   .init({
  //     liffId: "1656014303-pLEPbw2L'", // Use own liffId
  //   })
  //   .then(() => {
  //     console.log('success');
  //     alert('test');
  //     // Start to use liff's api
  //   })
  //   .catch((err) => {
  //     alert(err);
  //     // Error happens during initialization
  //     console.log(err.code, err.message);
  //   });

  // getUserProfile();
  // Try a LIFF function
}

async function getUserProfile() {
  const profile = await liff.getProfile();
  pictureUrl.src = profile.pictureUrl;
  userId.innerHTML = '<b>userId: </b>' + profile.userId;
  statusMessage.innerHTML = '<b>statusMessage :</b>' + profile.statusMessage;
  displayName.innerHTML = '<b> displayName : </b>' + profile.displayName;
  email.innerHTML = '<b>email:</b> ' + liff.getDecodedIDToken().email;
}
main();
