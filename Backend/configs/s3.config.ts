const s3Config = {
    region: process.env.S3_REGION || 'your_s3_region',
    accessKeyId: process.env.S3_ACCESS_KEY_ID || 'your_s3_access_key_id',
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || 'your_s3_secret_access_key',
    bucketName: process.env.S3_BUCKET_NAME || 'your_s3_bucket_name',
  };
  
  export default s3Config;