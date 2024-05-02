export default ({ env }) => ({
	ckeditor: {
		enabled: true,
		resolve: "./src/plugins/strapi-plugin-ckeditor"
	},
    "file-system": {
        enabled: true
    }
});
