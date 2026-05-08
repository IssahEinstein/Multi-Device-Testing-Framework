import { getUsers } from "./api.js";

async function main() {
  try {
    const users = await getUsers();

    const names = users.map(user => user.name);
    console.log(names);

    const bizUsers = users.filter(user => user.email?.includes(".biz"));
    console.log(bizUsers);

  } catch (error) {
    console.log("Failed to fetch");
  }
}

main();