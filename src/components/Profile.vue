<template>
  <button @click="getdetailsagain">UPDATE</button>
  <div v-if="!isLoading">
    <h2>Personal Details</h2>

    <img :src="avatar" alt="" srcset="" />
    <table>
      <tr>
        <td>UserID:</td>
        <td>{{ username }}</td>
      </tr>
      <tr>
        <td>First Name:</td>
        <td>{{ fname }}</td>
      </tr>
      <tr>
        <td>Last Name:</td>
        <td>{{ lname }}</td>
      </tr>
      <tr>
        <td>Gender:</td>
        <td>{{ gender }}</td>
      </tr>
      <tr>
        <td>Phone No.:</td>
        <td>{{ pno }}</td>
      </tr>
      <tr>
        <td>Date Of Birth:</td>
        <td>{{ dob }}</td>
      </tr>
    </table>
    <h2>Address</h2>
    <table>
      <tr>
        <td>City:</td>
        <td>{{ city }}</td>
      </tr>
      <tr>
        <td>Street Name:</td>
        <td>{{ streetname }}</td>
      </tr>
      <tr>
        <td>Street Address:</td>
        <td>{{ streetadd }}</td>
      </tr>
      <tr>
        <td>Zip code:</td>
        <td>{{ pin }}</td>
      </tr>
      <tr>
        <td>State:</td>
        <td>{{ state }}</td>
      </tr>
      <tr>
        <td>Country:</td>
        <td>{{ country }}</td>
      </tr>
    </table>
    <h2>Subscription</h2>
    <table>
      <tr>
        <td>Credit Card NO.:</td>
        <td>{{ cc }}</td>
      </tr>
      <tr>
        <td>Plan:</td>
        <td>{{ plan }}</td>
      </tr>
      <tr>
        <td>status:</td>
        <td>{{ status }}</td>
      </tr>
      <tr>
        <td>Payment Method:</td>
        <td>{{ method }}</td>
      </tr>
      <tr>
        <td>Term:</td>
        <td>{{ term }}</td>
      </tr>
    </table>
  </div>
  <div v-else>Wait.........</div>
</template>

<script>
import { getData } from "../api/userdata";
export default {
  data() {
    return {
      fname: "",
      lname: "",
      username: "",
      avatar: "",
      gender: "",
      pno: "",
      dob: "",
      city: "",
      pin: "",
      streetname: "",
      streetadd: "",
      state: "",
      country: "",
      cc: "",
      status: "",
      plan: "",
      method: "",
      term: "",
      isLoading: false,
    };
  },

  methods: {
    getdetailsagain() {
      this.isLoading = true;
      getData().then((response) => {
        console.log(response);
        this.fname = response.first_name;
        this.lname = response.last_name;
        this.username = response.username;
        this.avatar = response.avatar;
        this.gender = response.gender;
        this.pno = response.phone_number;
        this.dob = response.date_of_birth;
        this.city = response.address.city;
        this.streetname = response.address.street_name;
        this.streetadd = response.address.street_address;
        this.pin = response.address.zip_code;
        this.state = response.address.state;
        this.country = response.address.country;
        this.cc = response.credit_card.cc_number;
        this.status = response.subscription.status;
        this.plan = response.subscription.plan;
        this.method = response.subscription.payment_method;
        this.term = response.subscription.term;
      });
      this.isLoading = false;
    },
  },
  mounted() {
    this.getdetailsagain()
  },
};
</script>

<style>
p {
  font-size: 18px;
}
img {
  width: 100px;
  border-radius: 50%;
  border: 1px solid gainsboro;
}
table {
  margin: 0 auto;
  text-align: left;
}
</style>
>
