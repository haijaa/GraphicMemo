"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
dotenv.config();
const port = 3000;
const client = new pg_1.Client({
    connectionString: process.env.PGURI,
});
client.connect();
const app = (0, express_1.default)();
app.use((0, cors_1.default)(), express_1.default.json());
app.get("/reviews/latest", (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield client.query(`
    SELECT
      review.review_text,
      comics.comic_title,
      comics.comic_issue,
      review.comic_id
    FROM
      review
    JOIN
      comics
    ON
      review.comic_id = comics.comic_id;
  `);
    response.send(rows);
}));
app.post("/reviews", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { comic_id, review_user, review_text, review_rating } = request.body;
    const { rows } = yield client.query("INSERT INTO review (comic_id, review_user, review_text, review_rating) VALUES ($1, $2, $3, $4)", [comic_id, review_user, review_text, review_rating]);
    response.status(201).json(rows);
}));
app.delete("/reviews", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { review_id } = request.body;
    const { rows } = yield client.query("DELETE FROM review WHERE review_id = $1", [review_id]);
    response.status(201).json(rows);
}));
app.get("/comics", (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield client.query("SELECT * FROM comics;");
    const comics = rows.map((row) => ({
        id: row.comic_id,
        title: row.comic_title,
        description: row.comic_description,
        issue: row.comic_issue,
        character: row.comic_character,
        author: row.comic_author,
        publisher: row.comic_publisher,
        released: row.comic_released,
        imagecover: row.comic_imagecover,
    }));
    response.send(comics);
}));
app.get("/comics/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { rows } = yield client.query(`SELECT comics.comic_id, comics.comic_title, comics.comic_description, comics.comic_issue, comics.comic_character, comics.comic_author, comics.comic_publisher, comics.comic_released, comics.comic_imageCover, COALESCE(
    json_agg(
      json_build_object(
        'review_id', review.review_id,
        'review_user', review.review_user,
        'review_text', review.review_text,
        'review_rating', review.review_rating,
        'created_at', review.created_at
      )
    ) FILTER (WHERE review.review_id IS NOT NULL),
    '[]'
  ) AS reviews FROM comics LEFT JOIN review ON comics.comic_id = review.comic_id WHERE comics.comic_id = $1 GROUP BY comics.comic_id;`, [id]);
    const comicsWithReviews = rows.map((row) => ({
        id: row.comic_id,
        title: row.comic_title,
        description: row.comic_description,
        issue: row.comic_issue,
        character: row.comic_character,
        author: row.comic_author,
        publisher: row.comic_publisher,
        released: row.comic_released,
        imagecover: row.comic_imagecover,
        reviews: row.reviews || [],
    }));
    response.status(200).json(comicsWithReviews);
}));
app.post("/comics/post", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, issue, character, author, publisher, released, imagecover, } = request.body;
    try {
        const { rows } = yield client.query("INSERT INTO comics (comic_title, comic_description, comic_issue, comic_character, comic_author, comic_publisher, comic_released, comic_imagecover) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;", [
            title,
            description,
            issue,
            character,
            author,
            publisher,
            released,
            imagecover,
        ]);
        response.status(201).json({ message: "Add successful!", data: rows[0] });
    }
    catch (error) {
        console.log(error);
        response.status(500).send("Issues on serverside");
    }
}));
app.delete("/comics/delete", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.body;
    try {
        const { rows } = yield client.query("DELETE FROM comics WHERE comic_id = $1", [id]);
        response.status(200).json(`Comic with ID ${id} has been deleted.`);
    }
    catch (error) {
        response.status(500).json("Issues on serverside");
    }
}));
app.listen(port, () => {
    console.log(`Backend started on port ${port}`);
});
