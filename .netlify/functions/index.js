import { Client, LogLevel } from "@notionhq/client";

const { NOTION_API_TOKEN, NOTION_DATABASE_ID } = process.env;

async function addEmail(email) {
  // Initialize Notion client
  const notion = new Client({
    auth: NOTION_API_TOKEN,
    logLevel: LogLevel.DEBUG,
  });
  await notion.pages.create({
    parent: {
      database_id: NOTION_DATABASE_ID,
    },
    properties: {
      Email: {
        title: [
          {
            text: {
              content: email,
            },
          },
        ],
      },
    },
  });
}

function validateEmail(email) {
  const re =
    /^(([^&lt;&gt;()[\\]\\\\.,;:\\s@&quot;]+(\\.[^&lt;&gt;()[\\]\\\\.,;:\\s@&quot;]+)*)|(&quot;.+&quot;))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

module.exports.handler = async function (event, context) {
  // Check the request method
  if (event.httpMethod != "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  // Get the body
  try {
    var body = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      body: err.toString(),
    };
    return;
  }

  // Validate the email
  const { email } = body;
  if (!validateEmail(email)) {
    return { statusCode: 400, body: "Email is not valid" };
  }

  // Store email in Notion
  await addEmail(email);
  return { statusCode: 200, body: "ok" };
};
