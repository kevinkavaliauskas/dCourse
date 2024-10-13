#![cfg(test)]

use crate::{CoursesContract, CoursesContractClient};
use soroban_sdk::{token, Address, Env, String, Val, Vec};

#[test]
fn increment() {
    let env = Env::default();
    let contract_id = env.register_contract(None, CoursesContract);
    let client = CoursesContractClient::new(&env, &contract_id);
    let user_id: Address = Address::from_string(&String::from_str(&env, "GCTWJNUIM76ZEYDC5VQI4T3X6SDQIZQ7MZHBSMX5ASNGNT7YNJ5YCZEX"));

    // Append course_ids to the user
    client.append_database(&user_id, &1i32);
    client.append_database(&user_id, &2i32);
    client.append_database(&user_id, &3i32);

    // Retrieve the courses for the user and verify the results
    let retrieved_courses: Vec<i32> = client.retrieve_courses(&user_id);

    // Create the expected vector
    let mut expected_courses = Vec::new(&env);
    expected_courses.push_back(1i32);
    expected_courses.push_back(2i32);
    expected_courses.push_back(3i32);

    // Assert the retrieved courses match the expected courses
    assert_eq!(retrieved_courses, expected_courses);

    let token = token::Client::new(&env, &Address::from_string(&String::from_str(&env, "CBHBD77PWZ3AXPQVYVDBHDKEMVNOR26UZUZHWCB6QC7J5SETQPRUQAS4")));

    client.purchase(&user_id, &1i32, &token.address);
}
