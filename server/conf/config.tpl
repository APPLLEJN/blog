const env = process.env

module.exports = {
  serverPort: env.serverPort || 3000,

  mongoHost: env.mongoHost || '127.0.0.1',
  mongoDatabase: env.mongoDatabase || 'geekjiang',
  mongoPort: env.mongoPort || 27017,

  redisHost: env.redisHost || '127.0.0.1',
  redisPort: env.redisPort || 6379,
  redisPassword: env.redisPassword || '1q2w3e4r',

  tokenSecret: env.tokenSecret || 'test',
  tokenExpiresIn: env.tokenExpiresIn || 3600,

  defaultAdminName: env.defaultAdminName || 'admin',
  defaultAdminPassword: env.defaultAdminPassword || 'admin',

  qiniuAccessKey: env.qiniuAccessKey || 'xDSTLB1NTBrvCGGafDMrjyiydp8vJTg35YIs2K6S',
  qiniuSecretKey: env.qiniuSecretKey || 'Qp0u_H965eWzhZSPR2gdO4zIlOuRvClTEe1rzzPl',
  qiniuBucketHost: env.qiniuBucketHost || 'oojsyy1qh.bkt.clouddn.com',
  qiniuBucketName: env.qiniuBucketName || 'geekjiang-blog',
  qiniuPipeline: env.qiniuPipeline || ''
}
