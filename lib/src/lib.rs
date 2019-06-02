//#![feature(proc_macro, wasm_custom_section, wasm_import_module)]

extern crate console_error_panic_hook;
extern crate core;
extern crate image;
extern crate wasm_bindgen;

use image::GenericImageView;
use std::error::Error;
use wasm_bindgen::prelude::*;

//pub use utils::set_panic_hook;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn big_computation() {
    alert("Big computation in Rust");
}

#[wasm_bindgen]
pub fn get_length(s: &str) -> usize {
    s.len()
}

#[wasm_bindgen]
pub fn load_image(buf: Vec<u8>) {
    console_error_panic_hook::set_once();

    match image::load_from_memory(&buf) {
        Err(e) => alert(&format!("err {:?}", e.source())),
        Ok(res) => alert(&format!("ok {:?}", res.width())),
    };
}
