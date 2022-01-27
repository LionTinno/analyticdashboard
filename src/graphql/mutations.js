/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      name
      detail {
        resignprediction
        service
        cost
      }
      tw
      ci
      js
      pl
      result
      performance {
        topic
        value
      }
      esdata
      eltvdata {
        data
        labels
      }
      iqeq
      eltv
      iq
      description
      eq
      type
      typeimgurl
      imgurl
      predictionscore
      mbti {
        teamchart
        deptchart
        total
        type
        chart
        before
        after
      }
      total_score
      mbtigraph
      matching
      actualeltv
      lifeyear
      growthrate
      discountrate
      createdAt
      updatedAt
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      name
      detail {
        resignprediction
        service
        cost
      }
      tw
      ci
      js
      pl
      result
      performance {
        topic
        value
      }
      esdata
      eltvdata {
        data
        labels
      }
      iqeq
      eltv
      iq
      description
      eq
      type
      typeimgurl
      imgurl
      predictionscore
      mbti {
        teamchart
        deptchart
        total
        type
        chart
        before
        after
      }
      total_score
      mbtigraph
      matching
      actualeltv
      lifeyear
      growthrate
      discountrate
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      name
      detail {
        resignprediction
        service
        cost
      }
      tw
      ci
      js
      pl
      result
      performance {
        topic
        value
      }
      esdata
      eltvdata {
        data
        labels
      }
      iqeq
      eltv
      iq
      description
      eq
      type
      typeimgurl
      imgurl
      predictionscore
      mbti {
        teamchart
        deptchart
        total
        type
        chart
        before
        after
      }
      total_score
      mbtigraph
      matching
      actualeltv
      lifeyear
      growthrate
      discountrate
      createdAt
      updatedAt
    }
  }
`;
