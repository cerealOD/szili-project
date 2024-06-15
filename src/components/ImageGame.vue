<template>
  <div class="flex flex-row items-center gap-x-8">
    <button
      class="px-8 py-4 rounded-xl bg-red text-white font-bold text-3xl"
      @click="checkBad"
    >
      No
    </button>
    <image-container
      :source="pickedBatch == 'good' ? goodFigures[index] : badFigures[index]"
    ></image-container>
    <button
      class="px-8 py-4 rounded-xl bg-green text-white font-bold text-3xl"
      @click="checkGood"
    >
      Yes
    </button>
  </div>
  <div>{{ pickedBatch }}</div>
  <div>{{ index }}</div>
  <button
    class="px-8 py-4 rounded-xl bg-green text-white font-bold text-3xl"
    @click="chooseBatch"
  >
    Start
  </button>
  <button
    class="px-8 py-4 rounded-xl bg-red text-white font-bold text-3xl"
    @click=""
  >
    Stop
  </button>
  <div>All: {{ count }}</div>
  <div>Correct: {{ countGood }}</div>
  <div>Wrong: {{ countBad }}</div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      goodFigures: [
        require("../assets/goodFigures/image1.jpg"),
        require("../assets/goodFigures/image2.jpg"),
        require("../assets/goodFigures/image3.jpg"),
        require("../assets/goodFigures/image4.jpg"),
        require("../assets/goodFigures/image5.jpg"),
      ],
      badFigures: [
        require("../assets/badFigures/bad.png"),
        require("../assets/badFigures/bad.png"),
        require("../assets/badFigures/bad.png"),
        require("../assets/badFigures/bad.png"),
        require("../assets/badFigures/bad.png"),
        require("../assets/badFigures/bad.png"),
        require("../assets/badFigures/bad.png"),
        require("../assets/badFigures/bad.png"),
      ],
      pickedBatch: "",
      index: -1,
      countGood: 0,
      countBad: 0,
      count: 0,
    };
  },
  methods: {
    checkGood() {
      this.pickedBatch == "good" ? this.countGood++ : this.countBad++;
      this.count++;
      this.chooseBatch();
    },
    checkBad() {
      this.pickedBatch == "bad" ? this.countGood++ : this.countBad++;
      this.count++;
      this.chooseBatch();
    },
    chooseBatch() {
      let values = [
        {
          value: "good",
          probability: 0.3,
        },
        {
          value: "bad",
          probability: 0.7,
        },
      ];
      let i,
        pickedValue,
        randomNr = Math.random(),
        threshold = 0;

      for (i = 0; i < values.length; i++) {
        if (values[i].probability === "*") {
          continue;
        }

        threshold += values[i].probability;
        if (threshold > randomNr) {
          pickedValue = values[i].value;
          break;
        }

        if (!pickedValue) {
          //nothing found based on probability value, so pick element marked with wildcard
          pickedValue = values.filter((value) => value.probability === "*");
        }
      }

      this.pickedBatch = pickedValue;

      if (pickedValue == "good") {
        this.index = this.randomInRange(0, this.goodFigures.length - 1);
      } else {
        this.index = this.randomInRange(0, this.badFigures.length - 1);
      }
    },
    randomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>
