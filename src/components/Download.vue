<template>
  <div>
    <button @click="downloadPdf">download PDF</button>
  </div>
</template>

<script>
export default {
  name: "DownloadPdfButton",
  props: {
    pdfUrl: {
      type: String,
      required: true,
    },
    pdfFileName: {
      type: String,
      required: true,
    },
  },
  methods: {
    downloadPdf() {
      // create element <a> for download PDF
      const link = document.createElement("a");
      link.href = this.pdfUrl;
      link.target = "_blank";
      link.download = this.pdfFileName;

      // Simulate a click on the element <a>
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>
