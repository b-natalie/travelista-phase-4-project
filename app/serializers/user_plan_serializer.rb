class UserPlanSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :plan_id
end
