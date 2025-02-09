<template>
  <div class="w-full flex justify-center pt-40">
    <div
      class="container flex justify-center text-center bg-menu-gray rounded-2xl text-white p-8"
      style="width: fit-content"
    >
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <form v-on:submit.prevent="validateBeforeSubmit">
            <div class="form-group text-left">
              <label class="custom-label control-label mr-4 text-lg"
                >Password:</label
              >
              <input
                class="rounded-lg text-gray text-lg bg-white px-4 py-1"
                type="password"
                name="password"
                placeholder="Enter password to access website..."
                v-model.trim="password"
              />
              <span class="error help-block"></span>
            </div>
            <div class="text-danger mt-4" v-if="error">
              <p>Incorrect password.</p>
            </div>
            <button
              class="bg-gray p-2 rounded-lg text-white hover:bg-white hover:text-gray mt-8 text-lg submit-button"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      password: null,
    };
  },
  methods: {
    validateBeforeSubmit() {
      if (this.password === "bububaba12") {
        this.error = false;
        localStorage.setItem("user-password", this.password);
        this.$router.push("/");
      } else {
        this.error = true;
      }
    },
  },
};
</script>
<style>
.submit-button {
  transition: all 0.25s cubic-bezier(0.25, 0.85, 0.55, 1);
}
input::placeholder {
  font-size: small;
  color: black;
  font-weight: 500;
  opacity: 0.5;
}
</style>
