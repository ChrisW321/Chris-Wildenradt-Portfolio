module.exports = function(grunt) {
  grunt.initConfig({
    aws: grunt.file.readJSON("credentials.json"),
    aws_s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        region: "us-east-1"
      },
      dist: {
        options: {
          bucket: "chrisw321-portfolio"
        },
        files: [
          {
            expand: true,
            cwd: "build",
            src: ["**"],
            dest: ""
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-aws-s3");

  grunt.registerTask("deploy", "aws_s3");
};
