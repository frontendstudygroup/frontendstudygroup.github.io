# Deploy and host a React app on AWS with Amazon S3 and Amazon CloudFront

## What are Amazon S3 and Amazon CloudFront

### Amazon S3

[Amazon Simple Storage Service (Amazon S3)](https://aws.amazon.com/s3/) is an object storage service that offers industry-leading scalability, data availability, security, and performance. It is designed to deliver 99.999999999% durability and scale past trillions of objects worldwide.

You can use Amazon S3 to store and protect any amount of data for a range of use cases, such as data lakes, websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics. 

### Amazon CoudFront

[Amazon CloudFront](https://aws.amazon.com/cloudfront/) is a content delivery network ([CDN](https://en.wikipedia.org/wiki/Content_delivery_network)) service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users. It delivers your content through a worldwide network of AWS data centers called edge locations. When a user requests content that you're serving with CloudFront, the request is routed to the edge location that provides the lowest latency (time delay). From there:
- If the content is already in the edge location with the lowest latency, CloudFront delivers it immediately.
- If the content is not in that edge location, CloudFront retrieves it from an origin that you've defined—such as an Amazon S3 bucket, a MediaPackage channel, or an HTTP server (for example, a web server) that you have identified as the source for the definitive version of your content.

In this way, your content is delivered to your users with the best possible performance. 

## Deploy and host a React app with Amazon S3 and Amazon CloudFront

When you're ready to release your React app to the world, you run your build script to [create a production build](https://create-react-app.dev/docs/production-build) for deployment. This build will contain your `index.html` file, JavaScript, CSS files and other static assets. It is a perfect example of a static website, which contains individual webpages, client-side scripts and other static assets. 

(By contrast, a dynamic website relies on server-side processing, including server-side scripts, such as PHP, JSP, or ASP.NET. Amazon S3 does not support server-side scripting, but AWS has other resources for hosting dynamic websites.)

You can use Amazon S3 to host your React app leveraging its support for hosting static websites. If you want to use HTTPS, which is generally a requirement by default these days, you can use Amazon CloudFront to serve your React app hosted on S3. CloudFront also improves the performance of your website.

### Host your React app on Amazon S3 

To use S3 for a static website, you can simply upload files to an S3 bucket and configure your S3 bucket for web hosting. 

Prerequisite: the following steps assume that you have an AWS account with appropriate access privileges. To create an AWS account, follow the steps [here](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).

1. Open the [Amazon S3 Console](https://console.aws.amazon.com/s3/). Choose the bucket you want to use for hosting from the **Buckets** list, or create a new bucket.
2. Enable static website hosting: 
   - Open the bucket's details page and go to its **Properties** tab. Find the **Static website hosting** section at the bottom, click **Edit** and choose **Enable**. More configurations will show up at this point.
   - Choose the **Hosting type** to be **Host a static website**.
   - Specify the **Index document** to be `index.html` (the html page that contains your React app script tag and is the entry point of your website).
   - Save the changes.
3. Grant public read access to your webstie:
   - Open the **Permissions** tab in the bucket's detail page
   - **Edit**  the **Block public access (bucket settings)** section to *uncheck* **Block all public access**
   - **Edit** the **Bucket policy** section and add an S3 bucket policy to grant public read access for your website. You can use the following sample policy from the [official documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html#step4-add-bucket-policy-make-content-public). *Remember to replace the `Bucket-Name` placeholder with your bucket's name*.
```json 
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::Bucket-Name/*"
            ]
        }
    ]
}
```
4. Upload the content of your React app's `build` folder to the S3 bucket. 

Now your React app is ready for visit on the cloud! 

When you configure your bucket as a static website, the website is available at the AWS Region-specific [website endpoint](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteEndpoints.html) of the bucket. To find the URL, go to the S3 bucket's **Properties** tab, scroll down to the bottom and find the **Bucket website endpoint** URL in the **Static website hosting** section. Click the URL and you'll see your React app website hosted in Amazon S3 on AWS!

For a more generic and detailed walkthrough tutorial of hosting static websites on S3, refer to this official documentation tutorial: [Tutorial: Configuring a static website on Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html)

### Setup Amazon CloudFront to serve your React app



## Optional: Build a CI/CD Pipeline with AWS CodePipeline

### What is AWS CodePipeline

[AWS CodePipeline](https://aws.amazon.com/codepipeline/) is a fully managed [continuous delivery](https://aws.amazon.com/devops/continuous-delivery/) service that helps you automate your release pipelines for fast and reliable application and infrastructure updates. It helps you automate the build, test, and deploy phases of your release process every time there is a code change, based on the release model you define. This enables you to rapidly and reliably deliver features and updates. You can easily integrate AWS CodePipeline with third-party services such as GitHub or with your own custom plugin. 

### Create a CI/CD Pipeline to Deploy Frontend to S3 