const Movie = require("../models/movieModel");

const addMovie = async (MovieData) => {
  try {
    const movie = await Movie.create(MovieData);
    return movie;
  } catch (error) {
    throw error;
  }
};

const getAllMovies = async (userId) => {
  try {
    const movies = await Movie.find({ userId: userId });
    return movies;
  } catch (error) {
    throw error;
  }
};

const getMovieById = async (MovieId, userId) => {
  try {
    const movie = await Movie.findOne({ userId: userId, _id: MovieId });
    return movie;
  } catch (error) {
    throw error;
  }
};

const updateMovie = async (MovieId, userId, updatedData) => {
  try {
    const movie = await Movie.findOneAndUpdate(
      { _id: MovieId, userId: userId },
      { $set: updatedData },
      { new: true }
    );

    return movie;
  } catch (error) {
    throw error;
  }
};

const deleteMovie = async (MovieId, userId) => {
  try {
    const movie = await Movie.findOneAndDelete({ _id: MovieId, userId: userId });
    return movie;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};
