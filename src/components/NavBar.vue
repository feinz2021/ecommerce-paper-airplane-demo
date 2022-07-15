<template>
  <!-- Login Modal Structure -->
  <div id="loginmodal" class="modal rc" style="width: 400px">
    <div class="modal-content">
      <h5 class="center fcbrown">Login</h5>
      <div style="margin-bottom: 20px"></div>
      <div class="input-field">
        <input placeholder="Email" v-model="email" id="email" type="text" />
        <label for="email" class="active">Email</label>
      </div>
      <div class="input-field">
        <input
          placeholder="Password"
          v-model="password"
          id="password"
          type="password"
        />
        <label for="password" class="active">Password</label>
      </div>
      <a
        @click="login()"
        class="
          rc
          btn btn-large
          waves-effect waves-light
          z-depth-0
          brown
          darken-2
        "
        style="width: 100%"
        >Login<span class="material-icons right" style="margin-top: 15px"
          >login</span
        ></a
      >
      <div style="margin-bottom: 10px"></div>
      <a
        @click="register()"
        class="rc btn btn-large waves-effect waves-light z-depth-0 brown"
        style="width: 100%"
        >Register<span class="material-icons right" style="margin-top: 15px"
          >person_add</span
        ></a
      >
    </div>
  </div>
  <!-- sidenav content -->
  <ul class="sidenav" id="sidenav">
    <li>
      <a class="fcbrown">{{ loggedInUserEmail }}</a>
    </li>
    <li><a class="fcbrown fp">aa</a></li>
    <li><a class="fcbrown fp">two</a></li>
    <li v-if="isLoggedIn === false">
      <a class="fp fcbrown modal-trigger" @click="closeSidenav()" href="#loginmodal">Login</a>
    </li>
    <li v-if="isLoggedIn === true">
      <a class="fp fcbrown" @click="logout(), closeSidenav()">Logout</a>
    </li>
  </ul>
  <!-- dropdown content (must be identical to sidenav content) -->
  <ul id="dropdown1" class="dropdown-content rc">
    <li><a class="fcbrown">aa</a></li>
    <li class="divider"></li>
    <li><a class="fcbrown">two</a></li>
    <li class="divider"></li>
    <li v-if="isLoggedIn === false">
      <a class="fcbrown modal-trigger" href="#loginmodal">Login</a>
    </li>
    <li v-if="isLoggedIn === true">
      <a class="fcbrown" @click="logout()">Logout</a>
    </li>
  </ul>
  <!-- nav -->
  <nav class="z-depth-0 brown">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo hide-on-med-and-down"
        >Logo</router-link
      >
      <a href="#" data-target="sidenav" class="sidenav-trigger"
        ><i class="material-icons">menu</i></a
      >

      <ul class="right hide-on-med-and-down">
        <li>
          <a class="dropdown-trigger" href="#!" data-target="dropdown1"
            >{{ loggedInUserEmail
            }}<i class="material-icons right">arrow_drop_down</i></a
          >
        </li>
      </ul>
      <a
        id="shoppingcart"
        class="btn-flat btn-large right waves-effect waves-dark"
        style="color: white; height: 100%"
        @click="shoppingCartBtn"
        ><i class="material-icons-outlined">shopping_cart</i></a
      >
      <!-- searchbox -->
      <div class="input-field" style="width: 60%; margin-left: 15%">
        <input
          @focus="searchIconColorActive()"
          @blur="searchIconColorInactive()"
          class="rc"
          id="search"
          style="color: white"
          type="search"
        />
        <label class="label-icon" for="search"
          ><i
            class="material-icons"
            :class="
              isSearchActive === true ? searchIconActive : searchIconInactive
            "
            >search</i
          ></label
        >
      </div>
    </div>
  </nav>
</template>

<script>
import M from "@materializecss/materialize";
import firebase from "../utilities/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default {
  data() {
    return {
      isSearchActive: false,
      searchIconActive: "searchiconactive",
      searchIconInactive: "searchiconinactive",

      email: "",
      password: "",

      loggedInUserEmail: "Please Login",
      isLoggedIn: false,
    };
  },
  mounted() {
    M.AutoInit();

    const auth = getAuth(firebase.app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        //https://firebase.google.com/docs/reference/js/firebase.User
        this.loggedInUserEmail = user.email;
        this.isLoggedIn = true;
        console.log("user email: " + user.email);
        // ...
      } else {
        this.loggedInUserEmail = "Please Login";
      }
    });
  },
  methods: {
    shoppingCartBtn() {
      this.$router.push("/shoppingcart");
    },
    searchIconColorActive() {
      const elem = document.getElementById("search");
      if (elem === document.activeElement) {
        this.isSearchActive = true;
      }
    },
    searchIconColorInactive() {
      const elem = document.getElementById("search");
      if (elem !== document.activeElement) {
        this.isSearchActive = false;
      }
    },
    login() {
      const auth = getAuth(firebase.app);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((res) => {
          console.log("console.log login successful: ");
          console.log(res);
          this.loggedInUserEmail = res.user.email;

          let elem = document.getElementById("loginmodal");
          let instance = M.Modal.getInstance(elem);
          instance.close();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error: " + errorCode + errorMessage);
          // ..
        });
    },
    register() {
      const auth = getAuth(firebase.app);
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user email: " + user.email);
          this.loggedInUserEmail = user.email;

          let elem = document.getElementById("loginmodal");
          let instance = M.Modal.getInstance(elem);
          instance.close();
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error: " + errorCode + errorMessage);
          // ..
        });
    },
    logout() {
      const auth = getAuth(firebase.app);
      signOut(auth)
        .then(() => {
          this.loggedInUserEmail = "Please Login";
          this.isLoggedIn = false;
          console.log("logged out");
          // Sign-out successful.
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error: " + errorCode + errorMessage);
          // ..
        });
    },
    closeSidenav() {
      let elem = document.getElementById("sidenav");
      let instance = M.Sidenav.getInstance(elem);
      instance.close();
    },
  },
};
</script>

<style>
.rc {
  border-radius: 10px !important;
}
/* searchbox focus input typing */
#search:focus {
  position: absolute;
  color: #795548 !important;
  height: 80%;
  margin: 5px 0px;
}
#shoppingcart:hover {
  background-color: #795548 !important;
}
.searchiconinactive {
  color: white !important;
}
.searchiconactive {
  color: #795548 !important;
}
.fcbrown {
  color: #795548 !important;
}
.input-field input:focus + label {
  color: #795548 !important;
}
#email {
  color: #3e2723 !important;
}
#password {
  color: #3e2723 !important;
}
.input-field input:focus {
  border-bottom: 1px #795548 !important;
  box-shadow: 0 1px #8d6e63 !important;
}
.fp {
  cursor: pointer;
}
</style>