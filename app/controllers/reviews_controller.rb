class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]
  # before_action :authorize_request, only: [:index, :show, :create, :update, :destroy]

  # GET /reviews
  def index
    @service = Service.find(params[:service_id])
    @reviews = Review.where(service_id: @service.id).all


    render json: @reviews
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    @service = Service.find(params[:service_id])
    @review = Review.where(service_id: @service.id).new(review_params)

    @review.user_id = @current_user.id

    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:content, :references, :references)
    end
end
