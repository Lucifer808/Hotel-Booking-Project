<script setup>
</script>

<template>
  <div class="search-bar-container">
    <h4>TÌM KIẾM PHÒNG</h4>
    <v-form v-model="valid">
      <v-container>
        <v-row class="d-flex align-center justify-lg-space-around">
          <v-col
            cols="3"
          >
            <v-hover :disabled="true">
              <v-autocomplete
                label="Danh sách phòng"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                :bg-color="'#ffffff'"
                hide-details
                density="comfortable"
              ></v-autocomplete>
            </v-hover>
          </v-col>
          <v-col
            cols="3"
          >
            <a-date-range></a-date-range>
          </v-col>

          <v-col
            cols="2"
          >
            <v-autocomplete
              label="Người lớn"
              required
              :items="[1,2,3,4,5,6,7,8]"
              :bg-color="'#ffffff'"
              hide-details
              density="comfortable"
            ></v-autocomplete>
          </v-col>
          <v-col
            cols="2"
          >
            <v-autocomplete
              label="Trẻ em"
              required
              :items="[1,2,3,4,5,6,7,8]"
              :bg-color="'#ffffff'"
              hide-details
              density="comfortable"
            ></v-autocomplete>
          </v-col>
          <v-col cols="2">
            <v-btn outline color="primary" dark>Tìm phòng</v-btn>
          </v-col>
        </v-row>

      </v-container>
    </v-form>
  </div>
</template>

<style scoped>
.search-bar-container {
  font-family: "raleway", sans-serif;
  position: absolute;
  top: 95%;
  left: 50%;
  width: 80%;
  height: 8rem;
  background-color: #fff;
  padding: 1rem;
  border: solid 1px #000;
  font-weight: 200;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  z-index: 999;
}
</style>
