<template>
  <vue-countdown
    v-if="counting"
    :time="1 * 1 * 7 * 60 * 1000"
    v-slot="{ days, hours, minutes, seconds }"
    @end="showResults"
  >
    <!-- Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes,
    {{ seconds }} seconds. -->
  </vue-countdown>
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

  <div :style="{ display: computedDisplay }">
    <div>All: {{ count }}</div>
    <div>Correct: {{ countCorrect }}</div>
    <div>Wrong: {{ countWrong }}</div>
    <div>Number of good figures: {{ countGoodFigures }}</div>
    <div>Number of bad figures: {{ countBadFigures }}</div>
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        this.checkGood();
      }
    });
    window.addEventListener("keydown", (e) => {
      if (e.key == "Control") {
        this.checkBad();
      }
    });
    window.addEventListener("keydown", (e) => {
      if (e.key == " ") {
        if (!this.start) {
          this.chooseBatch();
          this.start = true;
          this.counting = true;
        } else {
          this.showResults();
          this.start = false;
          this.counting = false;
        }
      }
    });
  },
  data() {
    return {
      goodFigures: [
        require("../assets/goodFigures/good_1.png"),
        require("../assets/goodFigures/good_2.png"),
        require("../assets/goodFigures/good_3.png"),
        require("../assets/goodFigures/good_4.png"),
      ],
      badFigures: [
        require("../assets/badFigures/bad_01.png"),
        require("../assets/badFigures/bad_02.png"),
        require("../assets/badFigures/bad_03.png"),
        require("../assets/badFigures/bad_04.png"),
        require("../assets/badFigures/bad_05.png"),
        require("../assets/badFigures/bad_06.png"),
        require("../assets/badFigures/bad_07.png"),
        require("../assets/badFigures/bad_08.png"),
        require("../assets/badFigures/bad_09.png"),
        require("../assets/badFigures/bad_10.png"),
        require("../assets/badFigures/bad_11.png"),
        require("../assets/badFigures/bad_12.png"),
        require("../assets/badFigures/bad_13.png"),
      ],
      pickedBatch: "",
      index: -1,
      countCorrect: 0,
      countWrong: 0,
      countGoodFigures: 0,
      countBadFigures: 0,
      count: 0,
      display: "none",
      start: false,
      counting: false,
    };
  },
  computed: {
    computedDisplay: function () {
      return this.display;
    },
  },
  methods: {
    showResults() {
      this.display = "block";
    },
    checkGood() {
      this.pickedBatch == "good"
        ? (this.countCorrect++, this.countGoodFigures++)
        : (this.countWrong++, this.countBadFigures++);
      this.count++;
      this.chooseBatch();
    },
    checkBad() {
      this.pickedBatch == "bad"
        ? (this.countCorrect++, this.countBadFigures++)
        : (this.countWrong++, this.countGoodFigures++);
      this.count++;
      this.chooseBatch();
    },
    chooseBatch() {
      let values = [
        {
          value: "good",
          probability: 0.2,
        },
        {
          value: "bad",
          probability: 0.8,
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
