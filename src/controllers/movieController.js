const movieService = require("../services/movieService");

const addMovie = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;

    const Movie = await movieService.addMovie({
      title,
      description,
      userId,
    });

    console.log("Movie created", Movie);

    res.status(201).json(Movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllMovies = async (req, res) => {
  try {
    const userId = req.user.id;
    const Movies = await movieService.getAllMovies(userId);
    res.status(200).json(Movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getMovieById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const Movie = await movieService.getMovieById(id, userId);

  if (!Movie) {
    return res.status(404).json({ message: "Movie not found." });
  }

  res.status(200).json(Movie);

  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const updatedData = req.body;

    const Movie = await movieService.updateMovie(id, userId, updatedData);

    if (!Movie) {
      return res.status(404).json({ message: "Movie not found." });
    }

    res.status(200).json(Movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const success = await movieService.deleteMovie(id, userId);

    if (!success) {
      return res.status(404).json({ message: "Movie not fund" });
    }

    res.status(204).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  addMovie,
  getAllMovies,
  updateMovie,
  getMovieById,
  deleteMovieById,
};
