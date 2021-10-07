class ServicesController < ApplicationController
  before_action :set_service, only: [:show, :create]
  before_action :authorize_request, only: [:index, :create, :show]


  # GET /services
  def index
    @services = Service.all

    render json: @services
  end

  # GET /services/1
  def show
    render json: @service, include: :reviews
  end

  # POST /services
  def create
    @service.user = current_user
    @service = Service.new(service_params)

    if @service.save
      render json: @service, status: :created
    else
      render json: @service.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /services/1
  # def update
  #   if @service.update(service_params)
  #     render json: @service
  #   else
  #     render json: @service.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /services/1
  # def destroy
  #   @service.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_service
      @service = Service.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def service_params
      params.require(:service).permit(:specialty, :description, :image_url)
    end
end
