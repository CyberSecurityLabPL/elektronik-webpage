export default ({ env }) => ({
	ckeditor: {
		enabled: true,
		resolve: "./src/plugins/strapi-plugin-ckeditor"
	},
	backup: {
		enabled: true,
     		config: {
        		cronSchedule: '0 9-17 * * *', // At minute 0 past every hour from 9 through 17
        		storageService: 'aws-s3',
        		awsAccessKeyId: env('ACCESS_KEY'),
        		awsSecretAccessKey: env('SECRET_ACCESS_KEY'),
        		awsRegion: env('REGION'),
        		awsS3Bucket: env('BUCKET_NAME'),
        		databaseDriver: env('DATABASE_CLIENT'),
        		mysqldumpExecutable: '/usr/bin/mariadb-dump',
        		mysqldumpOptions: [
          			'--add-drop-table',
          			'--extended-insert',
          			'--lock-tables',
          			'--dump-date'
        		],
        		allowCleanup: true,
        		timeToKeepBackupsInSeconds: 172800, // 2 days
        		cleanupCronSchedule: '0 9 * * *', // Each day at 09:00 AM
        		errorHandler: (error, strapi) => {
        	  		console.log(error);
        		},
      		}
    	},
});
