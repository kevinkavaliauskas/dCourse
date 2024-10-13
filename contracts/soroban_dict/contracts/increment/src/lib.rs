#![no_std]
use soroban_sdk::{Error, contract, contractimpl, contracttype, log, symbol_short, token, Address, Env, Map, Symbol, Val, Vec};

const DATA_KEY: Symbol = symbol_short!("DATA"); // Unique key for your map

#[contract]
pub struct CoursesContract;

// Define the state of the contract
#[contracttype]
pub struct MyState {
    pub data: Map<Address, Vec<i32>>, // Map with Symbol keys and i32 values
}

impl MyState {
    // Constructor for MyState
    pub fn new(env: &Env) -> Self {
        // Check if the map already exists in storage
        if let Some(existing_map) = env.storage().persistent().get::<_, Map<Address, Vec<i32>>>(&DATA_KEY) {
            // If it exists, return the existing state
            Self {
                data: existing_map,
            }
        } else {
            // If it doesn't exist, create a new map and store it
            let new_map = Map::new(&env);
            env.storage().persistent().set(&DATA_KEY, &new_map);
            Self {
                data: new_map,
            }
        }
    }
}


#[contractimpl]
impl CoursesContract {
    /// Adding Value to Database
    pub fn append_database(env: Env, user_id: Address, course_id: i32) {
        let mut state = MyState::new(&env);

        if let Some(mut courses) = state.data.get(user_id.clone()) {
            courses.push_back(course_id.clone());
            state.data.set(user_id.clone(), courses);
        } else {
            let mut new_courses = Vec::new(&env);
            new_courses.push_back(course_id.clone());
            state.data.set(user_id.clone(), new_courses);
        }

        env.storage().persistent().set(&Symbol::short("DATA"), &state.data);
    }

    /// Retrieve course_ids for a given user_id
    pub fn retrieve_courses(env: Env, user_id: Address) -> Vec<i32> {
        let state = MyState::new(&env);

        // Check if the user_id exists in the map
        if let Some(courses) = state.data.get(user_id) {
            // User exists, return their course_ids
            courses
        } else {
            // User doesn't exist, return an empty vector
            Vec::new(&env)
        }
    }
    
    pub fn purchase(env: Env, buyer: Address, course_id: i32, token:Address) {
        log!(&env, "Here");
        // let owner: Address = env.storage().persistent().get(&Symbol::short("owner"))
        // .expect("Owner not set");
        let owner: Address = env.current_contract_address();
        log!(&env, "Owner: {}", owner);

        let token = token::Client::new(&env, &token);

        log!(&env, "Attempting transfer from {} to {} of amount {}", buyer, owner, 100i128);


        // buyer.require_auth();
        // token.transfer(&buyer, &owner, &100i128);

        Self::append_database(env, buyer, course_id);

        fn move_token(
            env: &Env,
            token: &Address,
            from: &Address,
            to: &Address,
            max_spend_amount: i128,
            transfer_amount: i128,
        ) {
            let token = token::Client::new(env, token);
            let contract_address = env.current_contract_address();
            // This call needs to be authorized by `from` address. It transfers the
            // maximum spend amount to the swap contract's address in order to decouple
            // the signature from `to` address (so that parties don't need to know each
            // other).
            token.transfer(from, &contract_address, &max_spend_amount);
            // Transfer the necessary amount to `to`.
            token.transfer(&contract_address, to, &transfer_amount);
            // Refund the remaining balance to `from`.
            token.transfer(
                &contract_address,
                from,
                &(max_spend_amount - transfer_amount),
            );
        }
    }

}



mod test;
